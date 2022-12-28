import React from 'react'
import './categories.css'
import { getCategories } from './categoryMenuData';


const Categories = () => {
    let Data = getCategories();

    return (
        <div>
            {
                Data.map(category_info => {
                    return (
                        <div className='cates'>
                            <ul>
                                <li>
                                    <a><span  style={
                {
                    marginRight : "10px"
                }
            }
                                    >{category_info.icon}</span> {category_info.name}</a>
                                </li>
                            </ul>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Categories