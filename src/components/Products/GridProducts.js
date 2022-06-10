import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext';
import { getProductByName } from '../../selectors/getProductByName';
import { ItemProduct } from './ItemProduct';
import './products.css'

export const GridProducts = () => {

  // const productos = useMemo(() => getProducts(), []);
  
  const { search } = useContext(AuthContext)

  const productos = getProductByName(search)



  return (
    <>
      {
        productos.length > 0 ?
          (
            <div className="grid-layout">
              {
                productos.map(prod => (
                  <ItemProduct
                    key={prod.url}
                    {...prod}
                  />

                ))
              }

            </div>
          ) : (

            <div className='product-notfound animate__animated animate__swing'>
              <p>No se han encontrado coincidencias</p>
            </div>

          )

      }
    </>
  )
}
