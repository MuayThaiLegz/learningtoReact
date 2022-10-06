import Backbone from 'backbone';
import Faker from 'faker';

const PictureModel = Backbone.Model.extend({
    default:{
        src: 'https://picsum.photos/id/237/200/300/',
        name : 'Pusheen',
        details: 'Pushen the print',
        faved: false

    }
});


class PicGenerator {
    constructor() {
        this.Picz = new Backbone.Collection;
        [600, 601, 602, 603, 604, 605].map( (height)=>{
            this.createPicture(height, 600);
        })
    }

    createPicture(height = _.random(600, 650), width = 600) {
        console.log('Adding new picture');
        this.Picz.add(new PictureModel({
            src: `https://picsum.photos/${height}/${width}/`,
            name : Faker.Name.findName(),
            details: Faker.Lorem.paragraph()
        }));
    }
}



module.exports = {PictureModel, PicGenerator}
