const colors = [
  'rgba(247, 70, 74, 0.5)',
  'rgba(70, 191, 189, 0.5)',
  'rgba(253, 180, 92, 0.5)',
  'rgba(148, 159, 177, 0.5)',
  'rgba(77, 83, 96, 0.5)',
]

export const data_frontend = {
  datasets: [
    {
      data: [6, 7, 5, 5, 3],
      backgroundColor: colors,
      label: 'frontend dataset.', // for legend
    },
  ],
  labels: ['HTML', 'JavaScript', 'CSS3', 'TypeScript', 'Svelte'],
};

export const data_backend = {
  datasets: [
    {
      data: [7, 8, 8, 6, 4],
      backgroundColor: colors,
      label: 'backend dataset.', // for legend
    },
  ],
  labels: ['Go', 'Python', 'C#', 'TypeScript', 'PHP(Laravel)'],
};

export const data_utilties = {
  datasets: [
    {
      data: [6, 6, 5, 2, 8],
      backgroundColor: colors,
      label: 'utilities dataset.', // for legend
    },
  ],
  labels: ['Docker/Compose', 'Git', 'AWS S3', 'Cloudflare', 'VSCode'],
};

