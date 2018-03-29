import React , {Component} from 'react'
import Dog from './Dog/Dog';
import classes from './Dogs.css';
import  Aux from '../../hoc/Auxillary/Auxillary';
class Dogs extends Component {
    doglist = [
        {
            "id": "001",
            "breed": "Labrador Retriever",
            "temperament": "Friendly, Active, Outgoing",
            "height": "22.5-24.5 inches (male), 21.5-23.5 inches (female)",
            "weight": "65-80 pounds (male), 55-70 pounds (female)",
            "life-expectancy": "10-12 years",
            "group": "Sporting",
            "price": "400",
            "images": [
                {
                    "image1": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231410/Labrador-Retriever-On-White-01.jpg",
                    "image2": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231404/Labrador-Retriever-On-White-02.jpg",
                    "image3": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231400/Labrador-Retriever-On-White-03.jpg",
                    "image4": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231343/Labrador-Retriever-On-White-06.jpg"
                }
            ]
        },
        {
            "id": "002",
            "breed": "German Shepherd",
            "temperament": "Confident, Courageous, Smart",
            "height": "24-26 inches (male), 22-24 inches (female)",
            "weight": "65-90 pounds (male), 50-70 pounds (female)",
            "life-expectancy": "7-10 years",
            "group": " Herding Group ",
            "price": "500",
            "images": [
                {
                    "image1": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg",
                    "image2": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12205616/German-Shepherd-Dog-On-White-03-1-1.jpg",
                    "image3": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12233026/German-Shepherd-Dog-On-White-06.jpg",
                    "image4": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12233022/German-Shepherd-Dog-On-White-08.jpg"
                }
            ]
        },
        {
            "id": "003",
            "breed": "Golden Retriever",
            "temperament": "Friendly, Intelligent, Devoted",
            "height": "23-24 inches (male), 21.5-22.5 inches (female)",
            "weight": "65-75 pounds (male), 55-65 pounds (female)",
            "life-expectancy": "10-12 years",
            "group": "Sporting",
            "price": "450",
            "images": [
                {
                    "image1": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12211635/Golden-Retriever-on-White-10.jpg",
                    "image2": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232719/Golden-Retriever-On-White-05.jpg",
                    "image3": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232726/Golden-Retriever-On-White-03.jpg",
                    "image4": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232658/Golden-Retriever-On-White-09.jpg"
                }
            ]
        },
        {
            "id": "004",
            "breed": "Bulldog",
            "temperament": "Friendly, Courageous, Calm",
            "height": "14-15 inches",
            "weight": " 50 pounds (male), 40 pounds (female)",
            "life-expectancy": "8-10 years",
            "group": " Non-Sporting Group ",
            "price": "600",
            "images": [
                {
                    "image1": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235306/Bulldog-On-White-03.jpg",
                    "image2": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235256/Bulldog-On-White-07.jpg",
                    "image3": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235308/Bulldog-On-White-02.jpg",
                    "image4": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235249/Bulldog-On-White-10.jpg"
                }
            ]
        },
        {
            "id": "005",
            "breed": "Beagle",
            "temperament": "Friendly, Curious, Merry",
            "height": "13 inches & under, 13-15 inches",
            "weight": "under 20 pounds (13 inches & under), 20-30 pounds (13-15 inches)",
            "life-expectancy": "10-15 years",
            "group": "Hound group",
            "price": "420",
            "images": [
                {
                    "image1": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000934/Beagle-On-White-08.jpg",
                    "image2": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000937/Beagle-On-White-07.jpg",
                    "image3": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01.jpg",
                    "image4": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000958/Beagle-On-White-02.jpg"
                }
            ]
        },
        {
            "id": "006",
            "breed": "Rottweiler",
            "temperament": "Loyal, Loving, Confident Guardian",
            "height": "24-27 inches (male), 22-25 inches (female)",
            "weight": "95-135 pounds (male), 80-100 pounds (female)",
            "life-expectancy": "9-10 years",
            "group": "Working Group",
            "price": "500",
            "images": [
                {
                    "image1": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225007/Rottweiler-On-White-02.jpg",
                    "image2": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225004/Rottweiler-On-White-03.jpg",
                    "image3": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213129/Rottweiler-On-White-07-2.jpg",
                    "image4": "http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224946/Rottweiler-On-White-08.jpg"
                }
            ]
        }

    ];
    render() {
        const loadDogs = this.doglist.map(dog => {
            return <Dog url={dog.images[0].image1} alt={dog.id} breed={dog.breed} temperament={dog.temperament} >
            </Dog>

        });
        return (
            <Aux>
                {loadDogs}
            </Aux>
        )
    }
}
export default Dogs;