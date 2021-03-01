#!/bin/bash
set -o errexit

scripts_dir="$(dirname "${BASH_SOURCE[0]}")"
GIT_DIR="$(realpath $(dirname ${BASH_SOURCE[0]})/..)"

# make sure we're running as the owner of the checkout directory
RUN_AS="$(ls -ld "$scripts_dir" | awk 'NR==1 {print $3}')"
if [ "$USER" != "$RUN_AS" ]
then
    echo "This script must run as $RUN_AS, trying to change user..."
    exec sudo -u $RUN_AS $0
fi

cd /home/${USER}/

python3 -m venv env
source env/bin/activate


google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \
          --scope https://www.googleapis.com/auth/gcm \
          --save --headless --client-secrets /home/${USER}/SmartMirror/credentials/client_secret_924959969127-n9ljsjs9n8locvga9qep366cgi08fkka.apps.googleusercontent.com.json

echo ""
echo "Finished installing Google Assistant........."
