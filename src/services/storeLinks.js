// Buscar os links salvos
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

//Salvar um link no localStored
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  //se ja existir um link salvo com um ID, não será salvo para não haver duplicidade

  const hasLink = linksStored.some( link => link.id === newLink.id)

  if(hasLink) {
    console.log('ESSE LINK JA EXISTE')
    return;
  }

  //adicionar novo link na lista

  linksStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored))
  console.log('LINK SALVO COM SUCESSO!');
}