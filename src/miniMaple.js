class MiniMaple {
    diff(eq, d){
        let Minuses = eq.split('-');
        let result = "";

        for (let i = 0; i < Minuses.length; ++i) {
            let Pluses = Minuses[i].split('+');

            for (let j = 0; j < Pluses.length; ++j) {
                result += this.diffSums(Pluses[j], d);
                if (j < Pluses.length - 1) {
                    result += "+";
                }
            }

            if (i < Minuses.length - 1) {
                result += "-";
            }
        }

        result = result.replace("+0", '');
        result = result.replace("-0", '');
        result = result.replace("0+", '');
        result = result.replace("0-", '-');

        return result === '-0' ? '0' : result;
    }

    diffSums(sums, d){
        if (sums.includes(d)) {
            let power = sums.includes('^') ? Number(sums.split('^')[1]) : 1
            let factor = sums.includes('*') ? Number(sums.split('*')[0]) : 1
            if (power === 1) {
                return `${factor}`
            } else {
                let Factor = (factor === 1 ? power : `${factor * power}`)
                let Var = `${d}${power === 2 ? '' : `^${power - 1}`}`
                return `${Factor}*${Var}`
            }
        } else {
            return '0'
        }
    }
}


export {MiniMaple}