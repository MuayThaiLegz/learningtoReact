import Backbone from 'backbone';
import Faker from 'faker';

const PictureModel = Backbone.Model.extend({
    default:{
        src: 'https://picsum.photos/id/237/200/300/',
        name : 'Pusheen',
        details: 'Pushen the print'
    }
});


const Cats = new Backbone.Collection;

Cats.add(new PictureModel({src:'https://picsum.photos/200/285/', name: Faker.Name.findName(), details:Faker.Lorem.paragraph()}));
Cats.add(new PictureModel({src:'https://picsum.photos/200/290/', name: Faker.Name.findName(), details:Faker.Lorem.paragraph()}));
Cats.add(new PictureModel({src:'https://picsum.photos/200/295/', name: Faker.Name.findName(), details:Faker.Lorem.paragraph()}));
Cats.add(new PictureModel({src:'https://picsum.photos/200/300/', name: Faker.Name.findName(), details:Faker.Lorem.paragraph()}));
Cats.add(new PictureModel({src:'https://picsum.photos/200/305/', name: Faker.Name.findName(), details:Faker.Lorem.paragraph()}));
Cats.add(new PictureModel({src:'https://picsum.photos/200/310/', name: Faker.Name.findName(), details:Faker.Lorem.paragraph()}));

console.log(Cats.first().get('name'));
console.log(Cats.first().get('details'));

module.exports = {Cats, PictureModel}