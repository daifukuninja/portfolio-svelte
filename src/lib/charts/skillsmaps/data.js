const colors = [
  '#d68fb8',
  '#c86aa1',
  '#ba4589',
  '#95376e',
  '#702952',
  '#4a1c37',
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
  labels: ['Docker/Compose', 'Git', 'AWS', 'Cloudflare', 'VSCode'],
};

