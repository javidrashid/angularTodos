export class TodoService {
    getTodos() {
        return [{
            todoName: 'Buy MIlk',
            status : true
        },
        {
            todoName: 'Buy Tea',
            status : false
        }];
        //console.log('get todos...');
    }
}