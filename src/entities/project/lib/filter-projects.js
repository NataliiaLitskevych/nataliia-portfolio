export function filterProjects(projects, activeCategory) {
  if (activeCategory === 'all') {
    return projects;
  }

  return projects.filter(
    (project) =>
      project.category === activeCategory ||
      project.filterGroups?.includes(activeCategory)
  );
}
