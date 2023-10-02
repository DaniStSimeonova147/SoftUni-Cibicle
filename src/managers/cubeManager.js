const uniqid = require('uniqid');
const cubes = [
    {
        id: '44dx8nh1ln8zvrpz',
        name: 'rubik',
        description: 'It is cool!',
        imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/2/ZU/FH/UB/56427633/rubikscube.jpg',
        difficultyLevel: 4,
    },
    {
        id: '54dx8nh1ln8zvrpg',
        name: 'rubik vol 2',
        description: 'It is very cool!',
        imageUrl: 'https://cuboss.com/wp-content/uploads/2021/04/stora-rubiks-kuber-storre-speedcubes.jpg',
        difficultyLevel: 5,
    }
];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x =>x.id ==cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };
    cubes.push(newCube);

    return newCube;
}