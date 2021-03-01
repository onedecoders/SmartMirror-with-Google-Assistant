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
cd ~
source env/bin/activate
python -u /home/${USER}/GassistPi/src/main.py --device_model_id 'magicmirrorassistant-296808-magicmirrorassistant-rj7reo' --project_id 'magicmirrorassistant-296808'
