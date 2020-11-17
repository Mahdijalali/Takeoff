import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article : []
        }
    }
    componentDidMount() {
        const { params } = this.props.match;
        axios.get(`https://localhost:44346/Part/Items/Getitem?PartBrandRowID=`+params.callingcode)
            .then(response => {
                this.setState({
                    article : response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { article } = this.state;
        return (
            <div className="rtl">
                <h2>عنوان محصول : {article.partDesc} </h2>
                <p>{article.serial}</p>
            </div>
        );
    }
}

export default Product;
