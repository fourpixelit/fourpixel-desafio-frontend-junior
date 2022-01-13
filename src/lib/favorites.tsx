export class Favorites {
  static save(favorites: string[]) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  static retrieve(): string[] {
    const data = localStorage.getItem("favorites");
    if (!data) return [];

    return JSON.parse(data);
  }

  static append(fullName: string) {
    const favorites = Favorites.retrieve();

    if (favorites.includes(fullName)) return;
    favorites.push(fullName);

    Favorites.save(favorites);
  }

  static remove(fullName: string) {
    const favorites = Favorites.retrieve();

    const index = favorites.findIndex((repository) => repository === fullName);
    if (index > -1) favorites.splice(index, 1);

    Favorites.save(favorites);
  }

  static isFavorite(fullName: string) {
    const favorites = Favorites.retrieve();
    console.log(favorites, "includes", fullName, favorites.includes(fullName));

    return favorites.includes(fullName);
  }

  static toggle(fullName: string) {
    if (Favorites.isFavorite(fullName)) Favorites.remove(fullName);
    else Favorites.append(fullName);
  }
}
