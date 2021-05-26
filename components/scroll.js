export const scrollProjects = (id) => {
  if (document) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
}
