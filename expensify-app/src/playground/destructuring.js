// Object destructuring
const book = {
    title: 'Vaults of Terra: The carrion throne',
    author: 'Chris Wraight',
    publisher: {
        // name: 'Black Library'
    }
};

const { name: publisherName = 'Self-Publisher' } = book.publisher;

console.log(`${publisherName}`);


// Array destructuring

const adress = ['63 Memorandumului', 'Cluj-Naoca', 'Cluj', '1400'];

const [, city, state = 'Cluj'] = adress;

console.log(`You are in ${city} ${state}`);
