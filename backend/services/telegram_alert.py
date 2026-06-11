import requests

BOT_TOKEN = "YOUR_TOKEN"
CHAT_ID = "8050898296"

def send_telegram_alert(
    satellite,
    risk,
    time_remaining
):

    message = f"""
🚨 ORBITAL AI ALERT

🛰️ Satellite: {satellite}
⚠️ Collision Risk: {risk}%
⏳ Time Remaining: {time_remaining}

Immediate action required.
"""

    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

    payload = {
        "chat_id": CHAT_ID,
        "text": message
    }

    response = requests.post(url, json=payload)

    print(response.json())