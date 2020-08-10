const  dateFormat=(originVal, isSecond = true)=> { // 日期格式化
        if (originVal) {
            const dt = new Date(originVal)
            const y = dt.getFullYear()
            const m = (dt.getMonth() + 1 + '').padStart(2, '0')
            const d = (dt.getDate() + '').padStart(2, '0')
            const hh = (dt.getHours() + '').padStart(2, '0')
            const mm = (dt.getMinutes() + '').padStart(2, '0')
            const ss = (dt.getSeconds() + '').padStart(2, '0')
            return isSecond ? `${y}-${m}-${d} ${hh}:${mm}:${ss}` : `${y}-${m}-${d}`
        } else {
            return '-'
        }

    }
 const  toThousands=(originVal, unit, flag,num) =>{ // 数字千分位
        if (originVal) {
            flag && (originVal = toDecimal(originVal,2))//保留两位小数
            num && (originVal = toDecimal(originVal,num))//保留两位小数
            if(!originVal){
                return originVal
            }
            // 如果单位是% ，且值为负数，就转成-
            if(unit==='%' && originVal <0){
                    return '-'
            }
            var str = originVal.toString()
            var reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
            return unit ? str.replace(reg, '$1,') + unit : str.replace(reg, '$1,')
        } else {
			if(originVal===0){
                return unit ? 0 +unit:0
            }
            return '-'
        }
    }
const   toDecimal=(x,n=2) =>{
        const num = [1,10,100,1000,10000,100000][n] 
        let f = parseFloat(x); 

        if (isNaN(f)) { 
            return x; 
        } 
        f = Math.round(x*num)/num; 
        return f; 

    } 
export default { dateFormat, toThousands,toDecimal}

