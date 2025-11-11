#!/usr/bin/env bash

# Function to get file count
get_count() {
    ls -1 | wc -l
}

file_count=$(get_count)

echo "How many files are in the current directory?"
read guess

while true; do
    if [[ $guess -lt $file_count ]]; then
        echo "Too low. Try again:"
    elif [[ $guess -gt $file_count ]]; then
        echo "Too high. Try again:"
    else
        echo "Congratulations! You guessed correctly."
        break
    fi
    read guess
done
