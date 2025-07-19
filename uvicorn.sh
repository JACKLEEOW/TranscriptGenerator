#!/bin/bash

# Run backend
echo "Starting backend..."
uvicorn backend.main:app --reload