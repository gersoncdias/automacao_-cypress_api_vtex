import requests
import os

# Configurações
REPO_OWNER = "gersoncdias"  # Seu nome de usuário ou organização
REPO_NAME = "automacao_cypress_api_vtex"  # Nome do repositório
BASE_WIKI_URL = f"https://github.com/{REPO_OWNER}/{REPO_NAME}/wiki"

# Caminho para salvar os arquivos na área de trabalho (ajuste conforme necessário)
desktop_path = os.path.join(os.path.expanduser("~"), "Desktop", "WikiContents")

# Crie o diretório na área de trabalho, se não existir
os.makedirs(desktop_path, exist_ok=True)

def fetch_wiki_pages():
    return ["Home", "Outra-Pagina"]  # Substitua com os nomes das páginas da sua Wiki

def download_page_content(page_title):
    url = f"{BASE_WIKI_URL}/{page_title}"
    response = requests.get(url)
    response.raise_for_status()  # Verifica se a requisição foi bem-sucedida
    return response.text

def save_content_to_file(page_title, content):
    # Nome do arquivo baseado no título da página
    file_name = f"{page_title}.html"
    file_path = os.path.join(desktop_path, file_name)

    # Salva o conteúdo em um arquivo HTML
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(content)
    print(f"Conteúdo salvo em {file_path}")

def main():
    pages = fetch_wiki_pages()
    for page in pages:
        content = download_page_content(page)
        save_content_to_file(page, content)

if __name__ == "__main__":
    main()
