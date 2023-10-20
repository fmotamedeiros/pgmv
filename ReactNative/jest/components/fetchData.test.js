import fetchData from './fetchData';

test('the data is peanut butter', async () => {
    const data = await fetchData('https://viacep.com.br/ws/57035020/json/');
    expect(data.cep).toBe('57035-020');
});