import { Pipe } from "@angular/core";

@Pipe({
	name: "sortBy"
})

export class SorterPipe {
	transform(values: any[], sorters: any) {
		if (!values) return null;
		let temp = values.slice();
       
		return values.sort((row1: any, row2: any): number => {
            let result = 0;				
            let val1 = row1[sorters.sortField];
            let val2 = row2[sorters.sortField];

            if (val1 != val2) {
                let sortDir: number = (sorters.sortAsc == true) ? 1 : -1;

                if (val1 > val2) {
                    result = 1 * sortDir;
                } else {
                    result = -1 * sortDir;
                }					
            }			
        return result;
		});
	}
}