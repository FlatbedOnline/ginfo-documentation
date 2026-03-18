
## 1 - baixar e instalar Obsidian

No site obsidian.md

## 2 - git e github

```shell

# Clona repo
git clone https://github.com/FlatbedOnline/ginfo-documentation.git

# Muda diretorio repo
cd ginfo-documentation

# Instala dependências (caso o npm não esteja instalado, necessário instalar)
npm install

#se o node tiver desatualizado, também será necessário atualizar.

# Puxa tracker do repo
git fetch origin

# Muda para a branch interno com o tracker dela
git checkout -b interno origin/interno

#
Atualizar/sincronizar com o repositório remoto
git pull origin interno
```

## 3 - abrir obsidian na pasta `docs/` do projeto

## 4 - Criar MD file e alterar router.

## 5 - Após finalizar tudo dar:

```shell
git add . # Adicionar tudo pro stagger

git commit -m "mensagem de commit"

git push # Enviar pro repositório externo.
```

6 - Atenção para merge conflicts e afins, o estudo externo é necessário para melhor manuseamento. 