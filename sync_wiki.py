import requests
import os

# Configurações
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
REPO = "gersoncdias/automacao_cypress_api_vtex"  # Substitua pelo seu repositório

# Cabeçalhos para autenticação na API do GitHub
headers = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def fetch_wiki_pages():
    # URL para obter a lista de páginas da Wiki
    url = f"https://api.github.com/repos/{REPO}/wiki/pages"
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Levanta uma exceção para códigos de status HTTP não 200
    return response.json()

def download_page_content(page):
    # URL para obter o conteúdo de uma página específica da Wiki
    url = page['url'] + "/content"
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.text

def main():
    # Obter as páginas da Wiki
    pages = fetch_wiki_pages()
    for page in pages:
        # Baixar o conteúdo de cada página
        content = download_page_content(page)
        # Aqui você pode salvar o conteúdo, enviar para um destino ou apenas imprimir
        print(f"Conteúdo da página {page['title']}:")
        print(content)

if __name__ == "__main__":
    main()
