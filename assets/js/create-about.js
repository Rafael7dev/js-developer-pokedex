function createAbout(pokemon) {
  const about = document.querySelector("#about");
  about.innerHTML = "";
  about.classList.remove("hidden");

  about.innerHTML = `     
            <li>
              <span>Espécies</span>
              <strong>${pokemon.name}</strong>
            </li>

            <li>
              <span>Altura</span>
              <strong>${pokemon.height} cm</strong>
            </li>

            <li>
              <span>Peso</span>
              <strong>${pokemon.weight / 10} kg</strong>
            </li>

            <li>
              <span>Habilidades</span>
              <strong>
               ${pokemon.abilities.map((ability) => `${ability}`).join(", ")}
              </strong>
            </li>         
  `;
}
