export interface ProjectData {
  id?: number | string;
  slug: string;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  status: string;
  location: string;
  target: string;
  reached: string;
  percent: number;
  desc: string;
}

export const defaultProjects: ProjectData[] = [
  {
    id: 1,
    slug: 'depremzede-konteyner-ev',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    category: 'Barınma',
    categoryColor: 'bg-blue-600',
    title: 'Depremzede Ailelere Konteyner Ev Projesi',
    status: 'Devam Ediyor',
    location: 'Hatay, Kahramanmaraş',
    target: '500 aile',
    reached: '347 aile',
    percent: 69,
    desc: 'Depremin yıkıcı etkisiyle evsiz kalan ailelere, onurlu ve güvenli bir barınma imkânı sunmak amacıyla hayata geçirilen konteyner kent projemiz devam etmektedir.'
  }
];
