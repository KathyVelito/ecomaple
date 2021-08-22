import { useState, useEffect, useRef } from 'react'
import { obtenerProductos } from '../services/productService'
import Loading from '../components/Loading'
import GroupProducts from '../components/GroupProducts'
import Slider from '@material-ui/core/Slider';

export default function ProductosView() {
    const [productos, setProductos] = useState([])
    const [productosOriginal, setProductosOriginal] = useState([])
    const [cargando, setCargando] = useState(true)
    const [filtroPrecio, setFiltroPrecio] = useState([1, 100])

    const inputBusqueda = useRef()

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
            setProductosOriginal(productosObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }

    const manejarPrecio = (evento, nuevosPrecios) => {
        setFiltroPrecio(nuevosPrecios)
    }

    const ejecutarBusqueda = async () => {
        let miBusqueda = inputBusqueda.current.value
        const productosFiltrados = await obtenerProductos(miBusqueda)
        setProductos(productosFiltrados)
    }

    useEffect(() => {
        getProductos()
    }, [])

    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((prod) => {
            return prod.prod_precio >= filtroPrecio[0] && prod.prod_precio <= filtroPrecio[1]
        })
        setProductos(productosFiltrados)
    }, [filtroPrecio])

    return (
        <div>
            {cargando ? 
            (<Loading/>) :
            (<div className="py-4">
                <div className="container text-center">
                    <h1 className="my-4">
                        LOS MEJORES PRECIOS
                    </h1>
                    <div className="row my-2">
                       <div className="col-sm-12 col-md-6">
                           <h5>Filtrar Por precio</h5>
                           <Slider
                                value={filtroPrecio}
                                onChange={manejarPrecio}
                                valueLabelDisplay="auto"
                                min={500}
                                max={5000}
                            />
                       </div>

                       <div className="col-sm-12 col-md-6">
                           <h5>Filtro por nombre</h5>
                           <div className="d-flex gap-1">
                               <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Ingrese el nombre o descripción"
                                    ref={inputBusqueda}
                               />
                               <button className="btn btn-dark" onClick={ejecutarBusqueda}>
                                    <i className="fas fa-search" />
                               </button>
                           </div>
                        </div>

                    </div>
                </div>
                <GroupProducts productos={productos} />
            </div>)}
        </div>
    )
}