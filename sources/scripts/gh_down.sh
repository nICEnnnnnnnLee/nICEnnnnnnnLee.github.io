#!/bin/bash

# ./gh_down.sh user/repo v1 gh_token test.zip ./test.zip

REPO="${1:-user/repo}"
TAG="${2:-v1}"
TOKEN="${3:-gh_token}"
ASSET_NAME="${4:-test.zip}"
DOWNLOAD_PATH="${5:-$ASSET_NAME}"

# Step 1: Get the Release ID
RELEASE_URL="https://api.github.com/repos/${REPO}/releases/tags/${TAG}"
RELEASE_ID=$(curl -s -H "Accept: application/vnd.github+json" -H "Authorization: Bearer ${TOKEN}" "${RELEASE_URL}" | jq -r '.id')

if [[ -z "$RELEASE_ID" ]]; then
  echo "Error: Release ${TAG} not found."
  exit 1
fi

# Step 2: List existing assets
ASSETS_URL="https://api.github.com/repos/${REPO}/releases/${RELEASE_ID}/assets"
ASSETS=$(curl -s -H "Authorization: Bearer ${TOKEN}" "${ASSETS_URL}")

# Correctly parse the JSON array
ASSETS_ARRAY=$(echo "${ASSETS}" | jq -r '.[]')

# Step 3: Find the Asset URL
# echo "${ASSETS}"
ASSET_ID=$(echo "$ASSETS" | jq --arg ASSET_NAME "$ASSET_NAME" -r '.[] | select(.name == $ASSET_NAME) | .id') 
ASSET_URL="https://api.github.com/repos/${REPO}/releases/assets/${ASSET_ID}"

if [[ -z "$ASSET_ID" ]]; then
  echo "Error: Asset ${ASSET_NAME} not found."
  exit 1
fi

echo "Asset URL: ${ASSET_URL}"

# Step 4: Download the Asset
curl -L -o "${DOWNLOAD_PATH}" -H "Authorization: Bearer ${TOKEN}" -H "Accept: application/octet-stream" "${ASSET_URL}"

if [[ $? -eq 0 ]]; then
  echo "Asset ${ASSET_NAME} downloaded successfully to ${DOWNLOAD_PATH}."
else
  echo "Error downloading asset ${ASSET_NAME}."
fi
