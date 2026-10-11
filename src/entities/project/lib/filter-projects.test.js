import { filterProjects } from './filter-projects';

const sampleProjects = [
  { id: '1', category: 'solo', filterGroups: ['highlighted'] },
  { id: '2', category: 'team', filterGroups: ['highlighted', 'team'] },
];

describe('filterProjects', () => {
  it('returns every project for the all filter', () => {
    expect(filterProjects(sampleProjects, 'all')).toHaveLength(2);
  });

  it('filters projects by category', () => {
    expect(filterProjects(sampleProjects, 'team')).toEqual([
      { id: '2', category: 'team', filterGroups: ['highlighted', 'team'] },
    ]);
  });

  it('filters projects by additional filter group', () => {
    expect(filterProjects(sampleProjects, 'highlighted')).toEqual([
      { id: '1', category: 'solo', filterGroups: ['highlighted'] },
      { id: '2', category: 'team', filterGroups: ['highlighted', 'team'] },
    ]);
  });
});
