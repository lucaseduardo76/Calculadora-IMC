import { Level } from "../../helpers/imc"
import styles from "./Griditem.module.css"
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png' 


type Props = {
    data: Level
} | null

export const Griditem = ({data}: Props) =>{
    
    return(
        <div className={styles.main} style={{backgroundColor: data.color}}>
            <div className={styles.gridIcons}>
                {data.icon === 'up' && <img src={upImage} alt='' width='30'/>}

                {data.icon === 'down' && <img src={downImage} alt='' width='30'/>}
            </div>
            <div className={styles.gridTitle}>{data.title}</div>

            {data.yourImc > 0 &&
                <div className={styles.yourImc}> Seu IMC é de {data.yourImc.toFixed(2)}kg/m²</div>
            }

            <div className={styles.gridInfo}>
                IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>
            </div>
        
        </div>
    )
}