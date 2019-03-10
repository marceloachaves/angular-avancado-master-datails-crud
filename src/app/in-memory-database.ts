import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa'},
            { id: 2, name: 'Saúde', description: 'Planos de saúde e remédios'},
            { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc'},
            { id: 4, name: 'Salário', description: 'Recebimento de Salário'},
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelas'}
        ];

        const entries: Entry[] = [
            { id: 1, name: 'Gas de cozinha', categoryId: categories[0].id, category: categories[0],
                paid: true, date: '14/10/2018', amount: '70,80', type: 'revenue', description: 'Qualquer descricao' } as Entry,
            { id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1],
                paid: false, date: '20/10/2018', amount: '60,80', type: 'expense', description: 'Qualquer suplementos' } as Entry,
            { id: 3, name: 'Salário na empresa X', categoryId: categories[2].id, category: categories[2],
                paid: true, date: '05/10/2018', amount: '12,00', type: 'revenue', description: 'Qualquer salario' } as Entry,
            { id: 4, name: 'Video Game filha', categoryId: categories[3].id, category: categories[3],
                paid: false, date: '13/10/2018', amount: '23,50', type: 'expense', description: 'Qualquer video game' } as Entry,
            { id: 5, name: 'Cinema', categoryId: categories[4].id, category: categories[4],
                paid: true, date: '07/10/2018', amount: '85,63', type: 'expense', description: 'Qualquer cinema' } as Entry
        ];

        return { categories, entries };
    }
}
