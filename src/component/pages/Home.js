import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import InfiniteScroll from 'react-infinite-scroller';
import Header from '../sections/Header';
import * as ConnecctionString from '../../database/connectionstring';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            articles : [

                // {partDesc: "کالای 1" , serial: 1234, brandDesc:"Saipa" , partBrandRowID: 1},
                // {partDesc: "کالای 2" , serial: 12345, brandDesc:"Saipa" , partBrandRowID: 2},
                // {partDesc: "کالای 3" , serial: 12346, brandDesc:"Saipa" , partBrandRowID: 3},
                // {partDesc: "کالای 4" , serial: 12347, brandDesc:"Saipa" , partBrandRowID: 4},
                // {partDesc: "کالای 5" , serial: 12348, brandDesc:"Saipa" , partBrandRowID: 5},
            ],
            nextPage:1,
            hasMore: true,
        }
    }
    handleLoadMore(){
        axios.get(ConnecctionString.SERVERCONNECTIONSTRING +`/Part/Items/get?pageNumber=${this.state.nextPage}`)
        .then( response=> {
            const {pageNumber,totalPages} = response.data.paging;//
            const {items} = response.data;//

            this.setState( prevState => ({
                articles: [...prevState.articles, ...items],
                hasMore: pageNumber < totalPages ? true : false,
                nextPage:  pageNumber +1
            }))
        })
        .catch(function (error) {
            // handle error
        })
        .finally(function () {
            // always executed
        });
    }
    delitem=(index)=>{
        const articles = this.state.articles;
        articles.splice(index,1)
        this.setState({articles:articles});
    }
    
    render() {
        const h1style = {
            color: 'red'
        };    
        return (
                
            <div >
                <Header></Header>
                <div className="jumbotron rtl">
                    <h1 style={h1style}>وبسایت راکت</h1>
                    <p className="Boldtext">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</p>
                </div>
                <InfiniteScroll
                    className="row rtl"
                    pageStart={0}
                    loadMore={this.handleLoadMore.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {this.state.articles.map((product,index)=>
                        <Product 
                            product={product} 
                            key={index}
                            del={()=>this.delitem(index)}/>
                        )
                    }
                </InfiniteScroll>
                
            </div>
        );
    }
}

export default Home;
