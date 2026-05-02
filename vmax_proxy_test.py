
import requests
import time

proxies = [
    "http://namproxy:Ndz@160.187.247.109:10000",
    "http://namproxy:Ndz@160.187.247.146:10000",
    "http://namproxy:Ndz@160.187.247.147:10000",
    "http://namproxy:Ndz@160.187.247.151:10000",
    "http://namproxy:Ndz@160.187.247.55:10000"
]

def test_proxy(proxy_url):
    try:
        start_time = time.time()
        response = requests.get("https://api.ipify.org?format=json", proxies={"http": proxy_url, "https": proxy_url}, timeout=10)
        end_time = time.time()
        if response.status_code == 200:
            return True, end_time - start_time, response.json()['ip']
        return False, 0, None
    except Exception as e:
        return False, 0, str(e)

print("--- KIỂM TRA ĐỘ ỔN ĐỊNH PROXY vMAX ---")
for p in proxies:
    success, latency, ip = test_proxy(p)
    status = "OK" if success else "FAILED"
    color = "\033[92m" if success else "\033[91m"
    reset = "\033[0m"
    print(f"{p} -> {color}{status}{reset} (Latency: {latency:.2f}s, Outbound IP: {ip})")
