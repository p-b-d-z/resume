#!/usr/bin/env python3
import requests

URL = "https://resume.pbdz.xyz"
KEYWORDS = ["Joe Pobuda", "Cloudflare Worker"]


def test_site_operational():
    response = requests.get(URL, timeout=10)
    response.raise_for_status()

    content = response.text

    found = []
    missing = []
    for keyword in KEYWORDS:
        if keyword.lower() in content.lower():
            found.append(keyword)
        else:
            missing.append(keyword)

    print(f"Status: {response.status_code}")
    print(f"Found: {found}")

    if missing:
        print(f"Missing: {missing}")
        return False
    return True


if __name__ == "__main__":
    try:
        success = test_site_operational()
        exit(0 if success else 1)
    except Exception as e:
        print(f"Error: {e}")
        exit(1)
