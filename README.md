# Projekt symulatora procesora 6502
Ten projekt jest symulatorem procesora 6502, który był używany w popularnych komputerach osobistych w latach 80. Ten symulator umożliwia programowanie i uruchamianie programów napisanych w języku assembly.

## Jak uruchomić projekt
Aby uruchomić projekt, należy pobrać go z repozytorium GitHub i zainstalować zależności. Można to zrobić za pomocą następujących poleceń w terminalu:

```bash
git clone https://github.com/MizuUchiha/6502---projekt.git
cd 6502---projekt
npm install
```
Po zainstalowaniu zależności, można uruchomić projekt za pomocą polecenia:

```
npm start
```

Projekt zostanie uruchomiony w przeglądarce pod adresem http://localhost:8080.

## Jak używać projektu
1. Przed uruchomieniem projektu upewnij się, że na Twoim komputerze zainstalowany jest Node.js.
2. Pobierz pliki projektu i rozpakuj je w wybranym przez siebie miejscu.
3. Otwórz konsolę i przejdź do folderu, w którym znajdują się pliki projektu.
4. Wpisz komendę `npm install`, aby zainstalować wszystkie potrzebne paczki.
5. Następnie wpisz komendę `npm start` uruchomić projekt w trybie deweloperskim.
6. Otwórz przeglądarkę internetową i przejdź pod adres http://localhost:8080.
7. Teraz możesz używać projektu.

W razie potrzeby projekt można zbudować przy użyciu komendy `npm run build`. Po użyciu tej komendy w folderze dist pojawi się plik main.js, który zawiera całą aplikację. Można go skopiować na serwer, aby uruchomić aplikację w środowisku produkcyjnym.

#  Autorzy
Ten projekt został napisany przez Angelika Klimek.

# Licencja
Ten projekt jest dostępny na licencji MIT.