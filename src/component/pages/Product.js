import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Product extends Component {

    render() {
        const { product } = this.props;
        return (
            <div className="col-lg-4" style={{ marginBottom : 20 }}>
                <div className="card">
                    <img className="img-fluid img-thumbnail" style={{width:250},{ height:250}} src={'http://takeoffpart.ir/Areas/Administrator/Uploads/Parts/'+product.serial+'_main.jpg'} alt={product.title} />
                    <div className="card-body">
                        <h4 className="card-title">{product.partDesc.substring(0, 25)}</h4>
                        <p className="card-text" >{product.serial}</p>
                        <p className="card-text">{product.brandDesc}</p>
                        <Link className="btn btn-primary" to={`ProductItem/${product.partBrandRowID}`}>توضیحات بیشتر</Link>
                        <button onClick={this.props.del} className="btn btn-danger" style={{textAlign:0}}> Delete </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
