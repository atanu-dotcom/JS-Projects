const content = [
    {
        name: 'EIFFEL TOWER',
        photoURL: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'The Eiffel Tower is an iron lattice tower located on the Champ de Mars in Paris, France. It was completed in 1889 and has since become a global cultural icon of France and one of the most recognizable structures in the world. The tower stands at 300 meters (984 feet) tall and was the tallest. building in the world until the completion of the Chrysler Building in New York City in 1930.',
    },
    {
        name: 'BURJ KHALIFA',
        photoURL: 'https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Burj Khalifa is the tallest building in the world, located in Dubai, United Arab Emirates. It stands at a height of 828 meters (2,717 feet) and has 163 floors. The building was completed in 2010 and has become an iconic symbol of modern architecture and engineering.',
    },
    {
        name: 'TAJ MAHAL',
        photoURL: 'https://images.pexels.com/photos/30638768/pexels-photo-30638768/free-photo-of-taj-mahal-at-sunrise-iconic-indian-landmark.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'The Taj Mahal is an ivory-white marble mausoleum located in Agra, India. It was commissioned in 1632 by Mughal Emperor Shah Jahan in memory of his favorite wife, Mumtaz Mahal. The Taj Mahal is widely recognized as one of the most beautiful buildings in the world and is a UNESCO World Heritage Site.',
    },
    {
        name: 'VICTORIA MEMORIAL',
        photoURL: 'https://images.pexels.com/photos/16294/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'The Victoria Memorial is a large marble building in Kolkata, India, dedicated to the memory of Queen Victoria. It was commissioned in 1906 and completed in 1921. The memorial is surrounded by lush gardens and houses a museum with a collection of artifacts related to the British Raj in India.',
    },
    {
        name: 'JAGANNATH TEMPLE',
        photoURL: 'https://imgs.search.brave.com/2NFr3qg2G_njc89e_LOtO9pXLpadC1ICoG9_QbOI8NY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUx/NTg0MzIzL3Bob3Rv/L2luZGlhLW9yaXNz/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RlNfUHdpMU15/N25KMEVZQVFyczlh/QUppVHFxMjY4SnVp/SDJLNkJBbDVJMD0',
        text: 'The Jagannath Temple is a famous Hindu temple located in Puri, Odisha, India. It is dedicated to Lord Jagannath, a form of Lord Krishna. The temple is known for its annual Rath Yatra (chariot festival), where the deities are taken out in grand processions. The temples architecture is a blend of Kalinga and Dravidian styles.',
    }
];

const image = document.querySelector('.img');
const name = document.querySelector('.username');
const text = document.querySelector('.text');

let idx = 0;

updateContent();

function updateContent() {
    const { name: placeName, photoURL, text: description } = content[idx];
    image.src = photoURL;
    name.innerText = placeName;
    text.innerText = description;

    idx++;

    if (idx === content.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateContent();
    }, 5000);
}