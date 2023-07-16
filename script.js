function searchUser() {
  const usernameInput = document.getElementById('usernameInput');
  const userDataDiv = document.getElementById('userData');
  const username = usernameInput.value.trim();

  if (username === '') {
    userDataDiv.innerHTML = 'Por favor, digite um nome de usuário válido.';
    return;
  }

  const token = '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';
  const headers = {
    'Authorization': `Bearer ${token}`
  };

  axios.get(`https://api.github.com/users/${username}`, { headers })
    .then(response => {
      const userData = response.data;
      const userDataDiv = document.getElementById('userData');

      const html = `
      <img src="${userData.avatar_url}" alt="Foto de Perfil">
        <h2>${userData.name}</h2>
        <p>${userData.bio}</p>  
        <p>Company: ${userData.company}</p>
        <p>Repositórios: ${userData.public_repos}</p>
        <p>Seguidores: ${userData.followers}</p>
        <p>Seguindo: ${userData.following}</p>
        <p>Localização: ${userData.location}</p>
        <p>WebSite: ${userData.blog}</p>
      `;
      userDataDiv.innerHTML = html;
    })
    .catch(error => {
      userDataDiv.innerHTML = 'Não foi possível encontrar o usuário.';
      console.error('Erro ao buscar usuário do GitHub', error);
    });
}