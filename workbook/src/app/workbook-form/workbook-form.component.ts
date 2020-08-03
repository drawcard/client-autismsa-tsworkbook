import { Component, ViewChild, AfterViewInit } from '@angular/core';
import pdfMake from '../../../node_modules/pdfmake/build/pdfmake';
import pdfFonts from '../../../node_modules/pdfmake/build/vfs_fonts';
import { Section01Component } from './section01/section01.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-workbook-form',
  templateUrl: './workbook-form.component.html',
  styleUrls: ['./workbook-form.component.scss']
})

export class WorkbookFormComponent implements AfterViewInit {

  logo: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAYAAAC3ME4GAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAZKADAAQAAAABAAAANQAAAADZ8lU5AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAgOklEQVR4Ae1cCXxU1bk/524zk5UQUFmNEAGJuBR9WOsScan7HtwhCYj6FKu2KkrAiyza37Olams1BYJRW8vS2rrgUnWqVtwiigYhBETAsIbsmZm7nff/zp0ZsgFBEJ+/3zs6mTtnP9/+fee7cPYDl4kjJ+qlFaV2YZ55GIvaD3HOL2ecRxkTDmcM/3cuHqq4wP+CHtjLmutNmfv17K2CCc6p5UdctB9y7/n5plYaNm0An/PY1KcMJXRxzIsyjWkZClf2uDUBuNvCYgElOD4qIj3R+fIfOzLowHs+9R5Bsv+NvasbdJqlKHfadQDmxY6wJUu4zK61RWyTzWI1XX0cFtvkiNh2jGGWG8Uh+GXjjzKPprlMZv6gZ6I97E/5wTiEuGNR2IzIzQuvmHN/K4KzeYbGH2W6aiucaa6jdBJBXGWKsL2YZdt3q1yZoDCVOY4zEXPdHvaJjKTaj7J0KaMPxkkK+t8ZWrRpTqQ4t+RiT4hng2pKetRtrdJC4rS5X87e2p09TMg1+7vC/lThWm9XOHVGUD+utNLcQFyCz48SKT8Ih0iAbTKhuBnzOLtGZWo6FDJ0OXsujgxemGMGjOwad3eIqduaqs2tNjcVDp6yhHPlZp0bWVbMLkL/6TUj+6isgv0/QnYHvI71lf0bAmwTixTmTjmJeeJ0XQ2wqNdSw5mxmPoWsAJlwXogbH3Hkbt+F7CFAPgcpqjKk44bG69yXYfZdX3hceajpRU31f9YueSgK0ACVN6mzFgctDfAmurjP/OFZdXmyl0g3/PTIjbGBeLU+VUzPudM+TspeIiuXNZsX0sjJZfseYr/k60HHSHrc5hB8r14aMlQQOQ8Qwky6I5GVWF/IQgRkBexRbsVVV1BEb7L72ChQfpBJQp286TcxwLgEmlOd9X/INWRfqbPPpWDrUO41AvroTtcdg0X/AjQNW37xblVMz+ex2ax7fl5nIUXdesQCcTNr56xrGjwlLcw6CyFqyOa+LYL8Py3grzp+qJKZnVrsu/eiZv5plq7qafa5Ozk6VqtiGXGvKqKvtI6HMJq+MbcgHKok81z1jOLiHFPSx1UhBTkmfDKTat4qNnXc+1L4AiyiNvsci6eAXULKffD5j5xR5KjFP6oEN5ZPpeIXxBC8iqZA9QSlXYynfcElO62ARFaOMyYGTYdjKFPpxKmmup21Xvcz0FFSGJbnucUMCFGqIpK4HoljR0Wlm35YJdw54NReIXaKcQi+7X5Ay6RFFe2ZuZLRbkl72vcONkTzsnFQ6acYlaZ7yVCM22G7PYxHnqh9r0iME48Egk3D5nSz2ZimCeUgQrnA7ChAarCUzGN7QoRwWw7hcerDc9aUrru1w2ol/Gd6Wy6FGmVBcN51ro6qT4OGkJ8wJjWxJFmilVvXwTuUKOe9AsXPV59u1TyD4QfcHHQdgCDNaWWVoyJIwJuY+dYlaA+pOTBIX9C88kK0zTPdSdhovcSoqPdpB1+0PjtbCXFwRwCdM3IGq0u2pezSnTM29U5K9hH1EU3c9bQoJqbzEhR7tTTgcTJUVeMxL56wECBpUduKrxToVJYR2LWYy6LiKbljsPDaGooYGPg80o96SMebIwiJcNBQ0igISApwK6zLwEfnKTBM7e82H8MVV9KuyGE8QrejgMKCgDoRWPcwiPuO5XpWnRBFf+Y+nYsQIbkkpSgsbg1av9KV/Q8cMn543OnHj+v2ly+Oy6JA78NwhnIATK+rQ9DSNlNUTXBHVuMDighIwbiAkGAvV1QjcJhZDTaIrqYqcrbmsaWl1XNSs6U0H1kfLiBnToc2vSm5uggrvCUg4IQCpM8HjZ9U1cRlxo8lEpBRJS/llaZO+ihb0XfdrqD5LO5aIwDv6IHa7KXMNezJg66N89n+U56wdc/lWYzfJu5oPQ5MIHTXOaOx9S3bYwTA60TLxxI0swKBDYB/HG5JYPhw5TAWgOlixpQ+zpI02+4oWxzLa8JxBMVnuN5gLfQQNyupyN8Y7kOOxfzAScxA6QO8eWRDLZVrhquIr7kTLzEA2rEs92fFg+ZViA8tx+kVU9wcQ/0T2sSW0M8xvtEYjYcY/a54rLHDgpCYF3QOk7R0JLRwhFnaKqO08QqjaD2DwLQxJFP6aY0U+mXX9bHx7AWZxJEQW8yjy0RvQatT+JDrN5OOYKyqY6pAb3cisbu0hVjgOs5VyC88jB59EQUYSjfxDfpo//OM9MAjLuFEL/QFD0T35iUjwBimHAhjCL0W4EsceWCst0GM9LKuBxQ8B+JIw+dMQ5nlCrBoCApqk+G4Pobb/VQi+Ab5mTAInXxwEnoj3CdwSJOy9dc5fdk9er5/Jxld0WkGKGDfF+F5LP0urEA9n0tDt7b9WwchS2muBOtW1fxLylyEnsgEUNjJg4xe2H310ugCIcJz7v1hmN+BWXZZQFCBJ9Xae7EmZ8mSQ5KPQyR4xup9/HVGTAMBCek0O9xg+8fG4nay2EETAPCMx3P9hAPw38WxS3xbUP4OARsCUC6eyEgUqFnAiq1U8gHLX6DbJV/qBJFoA+xlc1szxIQ0TS3TfOgzoaFOY15+nAYJGWEDBrxvSMkNWeltJAKj7z/OOzvTIMHWcyLbVBU7W+0AQJ+QqbSbyoUp6JvyOPLNa4PwcHrcfdRCy45WosELqa2eOkACP+nYrC5uCNpJkSiXH/LiIey5myiA3MxfujUnxXmlrymcu1pztVcy7McAJcASJ0xgSRlmojq2nyIP/yPj5JkG7pRITSBYVAAcLkRD2gj1FEjtaFe6EpQB9o/VlV2yoK1s2cQ4YG742t/zwihhRLcAeBcCYrNIRbHdpfMXW2uoM3XVZzVjjukIkcU2MwzDZDs9SEtDf35/TjhY3D66Ng3Y1gCYDRFpzLvq1nfQCc8pyrAq+CDotGWMSSeoF/KPUe8F+DBc0jcYD8MBgAhv6v5qG5vH1pb7h+xNK4rAUXuEbvEnuOIkRYupJKmgrgUcMiTLUHtlHlVsz4iH4o2CDjRHIQ0n4To4fsotbm1PncMM3NAKNIRRJikHku/ROuR4iZztd3ay5YZ9Ht9zL4EouTUJrsOm3UXw0abF3Fb6nQeOK14SMmZ7cbs+kGHIiDSyZ6MuREJLDDA9NaY/U2a2gOxM5XFRHSDw5zXHWY9DfH5L8CCxAiNk/3l+L3+kRzBCMj4kPhaY7vWH2Dvjgum6sdgmRmIQLOgkgIrgHSNs9Jj9vUL1s66ZVGlaeUzOjuZvu2vnKVo2Ova36mD4Fuqx0h5zWyrAOIBN3qAF+7Am49f/W+2tvOkxFFk38sWwYpT9QzW7NQ/Wlb90HaqA4W/gsNfZ7uxO/ATgJRURYCU1IXvZFmwZvZnRbklzwOB11pe9FD02NzsNDwKtvggK1t7fc4ycyd1Hjf4vp8Be68C+boQLhFHd8S4C8SqBGiH2R9BkP0h0MNYjChEa2IDMFRW240bv3W40xeRiIqB/fVXfI+eOGI6cYUPm8SA+LdPTR0qD8RPhEkMooSxw+7LVh11CSjldITYHdDh1fPXzFpCFBLusCncgQRJxI0bMu1M7rqvA3tR1RDDo7ZeZzD7l6DJG0Nqap+o17pGz9SOiwOgK4TIOnLccL0bJioABb8M6rwwcbbiofekC1e7zRP8Lo2rvRzhUlLFXgkUmHdgBmsuc1pgOU2ft2bGI6Qb4vN2tZfEklIixMMsybqOD3vdQMcB3fzNEUfyyAFVXH4RKAgmIExJxt7iig1AMzZkZB8ertg1GyhGqVxfKR1D7nnFaVqmAu54XdjKhbqw703VMgdA3MFMbP0YSJ1MyICSJUmdAMauyeJPZdUz/o0LrNeAxJ9HXGf0hCOnnT13zYNvFOdOHQOj6j5DDR4HCidkuZhnr7AgZEDvaK5w6+HE3TAf4Zr5bGZyXYhgtWY76wvDLFjf3LBx+6ZMOyeHaS2pzFtY+YDNw7xLrkhOgAfC6AEv5FdQ+DseJlkIgFwA+e8hujuhbN3MsnhAMKnIaAMJ7igeOuUEJAAthQjphYNbKWqaYUuzMfYBV9THytY8+JcOG+6KKpN1RUeWXKgx/UUbpjbs5g+hKnbAWrsAFhBzPAvOqgAiIPG7V2K4ag6AQ59bUD3rehpCgVI4ITnCsfOxKEWbz4Cp/LYS0K8kE5wIDZ9u66a9UkX39tm+l4z3oMpqcvLxdZo0Pzn7RDe8V2XPvDyVVba78+DGev+6Vri8WFOMXhSGUDk3Wr2WCs68J5lrPFu21r/2pTnIanKCNbF4wDGJADl/G92SJhreaBLpH8MCOhG+xih8wyeIOqB2AlJgH2lSj7lR4vRLCgeXvAxyrkXUeiQIbTgQhf3qrMVufBd3C8XzqmclkLFbDo7vtd3XAUcIWU6Qk5ZcxRUFMnnBk7ru76Vfzd6MehJnFBZPFnBHoBS6o3jI1GMRnxgL8YGcK3sl3NvSXqHMuY+suLsl0ZkQAYvpvEjMmcqsQ95CPSn43R768erHY0ikeApEcSK4IgIFD6UtYMkRV5ClBKnX/aKQOwixlQbEnk/DgGSJU4hTWGpszoJ1s+6lepIC4Iz2FiQ17KV0x6LYyxTtmyu3+1bKODhgaDmfzEwcYiVCGvK+fFLuJKMjC9OlDs0CXXMhqK0OgbqSUIp7yoI1Mx9NIIMQUZR735UIHr4Gc3IhHMwRiKz+gkQcjcWcHc+COSFMUDLStCUIu6zCuBDqyAwl3YM2Sn70zVfq151C4+BIepYbaYZZLS1CZL7UQFuOLVvrI+O83EmBjs5ud+amPgeUQ2QYvHKM5A7FEQXwSg+BIwR65/+APK2mBbOrs6XipudEISqmZ8G1JeCN8qfXzt6YaLuz/29D9cHac8AVd2g8kE/OHABB3mULqDTDdr1C9P2kklV2Qel+1e8+M+uLjyx5AiLlMQfRQkICHDVy1rBNi8IgJL46IjSxhQ7fkqtwqaamUcQa5wszVdyyoGrGKuKKrJFZSmmFf54OA7v1s5ub6NZcuDtYKZUjKHk4Dn0+OUyI4WwE8GQQEdwR6MgdiZll/KrKXAUqk8igmBUp5PrgzoXwp18IKCn5EA8uosRR0D3tO0OKCyGuxfXtAKLIPXEJU7QlMbd1C5AIvcEawLXlloi9AGREQDA0HyFlb4WsMRfxOB3j6GyP5gzQz15Q9dAqMkryWJ7o6hJtb5O2bT9gCCFgkN8hJxfqZYi2HknUBxpdWrZmxodUv6X61K7MPp4PnyRxELojGA8/RGsJPAOR9CLuGi6kgB+ASeKBSD5IYoPmE8yzAeAs1E6g311xiZSFaJu/2qyBoHoKjiJ1TeGKeGFB9czLMHY15qA6f+/01HUhzlbA9RoIYSuk3dgFa2feQX4FJf3FY1LdQWrXs8drDxhCEmk344+acjg2ewUdHNHN7Z4qFtJaxB2dwiSoByJ5OO4gkiPXKLaVu677WkBNuYyoEMoSiOB0UMj/pFghOANAFE3F5algRRMHPZzpy21fb6BdFiAvqUtUTftzq9dUi5s8xMnYFFhKD2KKYUQ4KDLM449q95cmjEEX6oYS4MglfsfTxDkwe5/B3hXpACP21m7Efvw4IAghB620YqKkfs/h5+IK9Xg4W9iWeHdB1ay3aH+UidFxn9Iig40+LndqHhy4Mpi6b6SoKbjfVFQfEQCbjwgpCuPjiVLhLesAUEiHryLwPMDmzVdTe37+9LZ95RAKVdDDn1aZVXBPQSDy2McE1dBU6JEgEE/rdBqH/VO9rUHMEXEgSv17Ny12fvnq2SuIwCrZcJ6UCrTAAShyo/s7D8l/Ejnx273FKWr6mS1uE122FEEn/JU2n1DcibUSoZUJfn7u0hQt8+iI20QKlqiNjI12FIuNSt8BSt2An0JZ7ztA/P8Bd5wDhIQQ0v7C6LFt5G78ksQ5RdGRU0dBh78DroPpiwQExvDdJTII8Rp0F4fVtxnR4cnz184oRx2L5yVH8ZiQiFR9QIoklf2ciddVUEQWu2uxz8Tf0VCYMCzZOz0Oaf0n1XfFHVRPBf7ybXTP0eI0uEAGHZJEUxtkSCqFFaYAOCEDHGEDQC96iriirHrWpVjvU5oHiBphN/a+kp5BIB2tR+DNhx3pM4TGnwd3UFdUwmzrXOIiCjesIvpvpKuel0CGFL2+iDrgyKBtdNx4563tpYbiN6TYKFxiNWwoAHdwhEkg1/nSOcvmRK7LNTOsWmbBCpEHp7hOakt9yoJKs57SZ6IIywPItAqQiturOOBwWgT74LczJQCEqbi3hsiIvAkK+sPAav0fkN+SCLiiPIMhP5Pb9NiN+P6LVdtXpfUS/g21FTnTeSE0ln8/4/0ZinksqlOwXltxhTkFGQoB2hN04KMpQa3kCdzVE0fn9WYezipNdJrz+yj7jZDKcKWkFLfp29OwwQuJEvHfmy0h/Y+04eeqzcYuNi61KOzXa3HROow4CkWF1QQFytEmiOIDAIwG0xJ36ZG34TSWGxFjYWmNH+JOvM6gZ6Q9b9U33w+9MxAbOYMstHlV5ptdrJmsKque/VpRbgnuWIJXwoyGaCIuERbkmmIgVgU/ZysI6r6nEXejQWTSLqh8ILZIGgjJab6Xh/1CSD7CJHjpRipzWEZXIUwis0kgEr7tnZLS8/ZRM9JBaZyupmXYiBFxqboSchtatnojcP1wC6KmsJSk3iDv2YC5HICiJeuKHMAw9Hs5VzIWl62+t4kgQJSaFayBvT8nki/N5ckN0AvluP8rofgX9jET6T879TS1jvrHHNsl4eRpuuo5DpKlNFtxNNeKRDb4jjwSqGDy4pUGA1YUrfm+xpTb566bIWPRZIYjbwyi1ES377/sF0KGNNXAZGVswjFmf6fFPp0cNUQ660BpP480NB4PgzOhTNHLd0EESaImhKqE6INK3EPYlDYTIl+ALDNwxHbc5P0LLLLQ9rS3nlvjcxgZDpS81taqyQecw5hE0by5jmX9CqYpMtPcEzwm/hlrsWV6EZQHwoEQftwBByJsEnNQZRPye4HzEEZAA9NSia8ROHycufq0uevNekL2kJE1/PEKP4kPyxyUsl8ISe7Qs3BCxU3VMlir25SlQxWAyg8l0dNlATg8XA3QXQQQA/0QbQZHfAjsvep54vXyr2fL+3Ya6wOmD8zqm6Qd3XY+E3oEH8X8yvxm7OApd2uMP66pKZoitP6wivrLvm1Iou1YQj5lgyAVJ4A9R8Cpt8JRlCJK6gsEQM2KUnD2wS272W73NiGBEVeuyCo5m3u8CFdG/SCFdCgDnyV2NxWENEh1M5BWAXHzjp0SWfHMikeSUV3MrQEbiUTm3c3Srh5XvDcA12MRosrGwShmJc8Hbmh3TtRTEoIKCRdA/tt63Ln//ul1s1+myRLmeLuJD+KPdhsFcPik3McNSqs3svu4/jsWbXdD7bejPZu3nDjcpjRPtNIckhV8+R4M9T0kRTTUO5rnRXRcDCENQE+yCv1WgwZMGCuWHWKtZKG1XYHm2A5rJj/MvPV4l6TWqsEbPX1ZXRZC9pXINGzDdhTMOyz3VG1L9GuF3lekeQrzzSD0Vw/DUfUWxVIDDu4fDUUaEYl1dM0QhqNzS7PFjm9DO+mcpLhbGiKB1MxQbCuiz0urH8OYzreR0pqs3SwtOAqUgnAOHhdhMViZydIBebK+q7rkgH19SKxHgCbi6GJ8m7qO7TKdpu1+uxjedVU+cWPn0matZGN365ID9vWh3QKUE9Xji5WDLcfVUwNqLezvLT5gfEoh6k13nCNgHakw1bfQFSUtSJZIVNt5uOu5IUt1tz2Liyjk4WZaWqiP6lrysMjAhM5VXRhQCjLDaweuZlvW5zPD2OH0i9peqqGzrfTCJyEFH0l1uB49QU/1+rgxpQVstBK+C/ZDhZDBxST4OM0s1p/m1dK2rSMvnZQ/8nWZldO3H26/s+BtNucM1L6uCeMVxg5lI/LTlzI/VD5++NTjNYMPhFppdBxl9XwEI+PdaVySw+nKVmFWLzixzU16cFPcyGjXp8My+/QzTlE+taV+9uVo27HfV5gIt0adhdfhwHRwijnRrKkR53Akmr0qmLKM2e7ViZWswM7Bruu84Lneh1qMX0X1nmYcg2DsSw7j/4Hf/jIyyF7lwlsKM+oTz7FvJaCntLAedozN1V39c+Hqt9E4qicEI7b1R/R712tS/+nGnDdZzP6yKPf+CdRn4sib5H6aFOcqGE7vY0/LnPpDr6E2GToZmZXCNHsJrK13EFh/uiGWoZeyUrsv6+vSd+KZkEFEVjS45BHE9T9wmvkLboy/hXWXI6Qv90O4IHFGc4/NMwciUPAsUiI+8Vz1zXTbOY3q85nv9NLz/pY4QnwOAMAmhJS0bCjZXrh8OdVQ7TNogcr4v7gAo9GAgswJKakZIJkeicWRQhOAohyEzJAA9GdPqkdoIwTFOTCkpuCfyeADEW/qA+dtAHKtKHYk+6hKSMN8AzONbJxb9CYOpbFNbNsduHO4GY5b0HKtzYDJjgAPZQuhbKL2REGKzwlBNTUT/k8WgC+RRW1Wo3EB0o5+grzdNFhxxzU2Nvajerz3IecH0pNcmBZ1ihAJ+CX2ZyA5ezOsL2S764dgvkYaQzo18Xq2FrXPxSXXGTCT9RQtPQfO/IXUJ4xotS9m6df+FSDE546JR5cMBlCRHdKM+KkjRQayPwrl9JmZ0pVG2gje8RctCCmQuksqSjhvaOdNdDsIVpaWEjJrlocCwcEWi10Oh+0bAJjhvvy3FosMRdL3wzQvsgYxjWikfx4DPG/FjQRCzmkAip8DnMJGla2d2dtWIicyVwvTuHgAkeY7ml5rgMmMvYhTi4ZPHUXtMN8mkk+EZAYyAlQcZwDVJ95RCef74V6qw9NpSAdCrMCu1oOBs5G7leEo7n8FhCsv1RhbI9cjTgKk5KUb4NNIEQSsecE4vMpA02SNPAuw3P8CSplO8o/ZUTYGlE8O0reID71M3jLcqZ9OBJu2dcbQFW9rUWqkl9yACtYBZJHJ51/l0XzCCTQ98WXJRoV7n+EgLgEYc2+iEDjl3lIf3dPARHTBLadKzoc6it7S+j1ZhE+hm8NUt/ELikMluGh8ntmTuBXTUDEQeGQiJi6g/WKh0/3xiAogOsyFK30Ssg797u3+ImCJLHbBMuFcTi4ePO28FF39it5DIaqvjnfNsOyT0OccSYycf4LYGpK/Q7nwX06kLn0rNicsznaT7+sPybqmadI/KHIJaAuQ5J9DjsyQt31cPdSOOVd0NSnhIFEP5LR59mvdjGYpHoSi0esDxAmY3b+uIx2RGEvf/mDuJoAN/2Ah3oBiQTWNsjtuwp5ebBTpVcgeOSfBRarr9gO3ZiMygPt19hH9y0DY0YW25TxIXj9WXIdPDRECEicG0jqJYOPbeHWOflMBN71AHAqE9oaIux4U8goSKT7H5dWldOEVqc6WfRHlPCVD7xlCcGatYiizMfJdiC3ydi4iU5h0HwVa/Vm/+19JlRv+7IyGPB6FFBlIR/7u2ceO+NQDZUO2ElUjxO0XRfikTMAFBpP+A7xieFqoREmSeXwMJFHyCbuPP69pU7frMQFspNI8Cb00OipayrAn+a/+QCcMBAKemnD0LEQAEIhxxBEUgKRHhMd/A8RsBcKPh1AdR8SEF0p/j91+RPEpvHszjMZ84QMXeAN9xEX1/OpZz3mae7LFomWIGNTQ2ZDYNwgsP3sixBHpB3kL6rGLMI6I58vrx5yBkDz7FNFnzCrOtRu+GUHzh8P0d/+KhB/CFVeDOkimw3Jl9yxdvmIdDjaMdAL2dxJFUGkZzl2QG7eg9Kn+8MTStm31VoTSk0IRyBdIQF02KzZCSLIkmYhlB7LjdYkZ2n9TxmP52tlv40WWYsj0QwDsV+TcTMnRgm5f2Vvlg2jPkDXOIb1T3sDsb1GiGolT6KwdanrKfCBwGzZE4ugIGkPABSXHN0JIgYUEC3L+qhnLaK2cgHEEIs7lEHM0JtuOnxHqIh/nHYVkbao/o/zZN9fijZ5fttqNLowNGCg8qdwxf2eapIW6WRSyq7G1i6WSArBBIVhT9MA5Wki5Q5cYnudKLlEUYxsoZ53UIUJcXpw75Y7CI0su9xw2TSJUOBEETVbR2l5rmmRf4g9AgN6QBU22RxZjUQCUu2jBlxAFBeQQguQbnHuKckvCRUOmXUWvN0OMZNOaIOwdrY0xABnDPE9SJbjj64ffu68OOT3zSRcQseBFWGSiT8brx0o91YElepLOoXH0CnJboOVscG6Fib1i3JH3X7ABZixO35/2ijHNiiHWyrU4uwgijWOuVhyGXnbLgESgTk2kBLH5s4qH/hrya5clR8/fpSj0znhITe9NSlxR+d05owcO7N0/c2iPwb1GYPGPUtUMiElx6Q2DzUPIWYJsegKWFEMSQz+F6XM0pi0xVONUoips7dWcq3UZE1KamqXsFaqrIqiUQeIPGWZSd9TGaiWVOlDqQF26QarFE+mLFi1yiTvQvyhdyzodxsLzeI/yXQBZpoACWKXlVbO+pYNiC6OkIhfia/rddOwxbyOw+5U0RjT9T1SHSbeTDoEEyEEU+HBZtXKlmshOuWXE5CwQ2E09jN4jVKG+xFz+BvaJG0+QiMdeJeOjcNDkE0EvZ8O8JutjSa9BPYZlHp4y7JiLju2HmNlcIAMv/QRO9ZwmKUXiL6/K88n19vGPounKAEtp/QCAw/2LVW6W3tT6P+F7tvzutTs3K5r6SAuvr9B1rTKYohxFc+es1eZB1l7qeLH3kPHRAPOyFUk6VVGv6X6L64UwEDxKmBt8VBpdfiDfxmhENsLrTWLnClVXpfJIXOmGQoGIpmtvNYgdK3VDXU79Kasdwckbm9y6xRBTtRBXUaT+r4o4TZNafnLsNOpzZ8FvQ7je+Ax7W64F9FepjvQPuOQ3jhJ7tuwrU17raqrycStvXIa+YbzAJImB3jVPZBUe+kWwAW/c3NZgbf8rkLAd4iqGDMcqy2u9M11pvIvm1QNGf4z/olnsfFvRtPmPvH73tpo3P9tx15wxEVUX820tushV7ZWaocCZYgzc5+HznRHyv3R31p5dI6JrAAAAAElFTkSuQmCC"
  b1_intro: string;
  sectionHeading: any[];
  blockHeading: any[];
  blockText: any[];
  cardImageBase64: string = "test";
  docName: string = 'Autism & Me: Workbook';

  // Regular expression for stripping <br> tags in the PDF output
  regex = /\<br>/gi;

  //Fetch data from nested child components & assign to member variable
  @ViewChild(Section01Component) s01: Section01Component;
  @ViewChild(ImageUploadComponent) iu: ImageUploadComponent;

  section01StaticContent: any[];

  ngAfterViewInit(): void {
    this.section01StaticContent = this.s01.staticContent.sectionTitle;
    console.table(this);
  }


  formComplete() {
    console.table(this);
  }

  // PDF Generator
  generatePdf() {
    console.log('generatePDF() -> ' + this.iu.cardImageBase64);
    const documentDefinition = {
      pageSize: 'A4',
      pageMargins: [40, 40, 40, 40],
      footer: {
        columns: [
          { text: this.docName, alignment: 'center' }
        ]
      },
      content: [
        {
          //Autism SA Logo
          image: this.logo,
          width: 75,
          style: 'imageMargin'
        },
        { text: this.docName, style: 'title' },
        // Section 01
        { text: this.s01.staticContent[0].sectionTitle, style: 'heading' },
        { text: this.s01.staticContent[0].title0, style: 'heading' },
        { text: this.s01.staticContent[0].body0.replace(this.regex, '\n'), style: 'body' },
        { image: (this.iu.cardImageBase64 ? this.iu.cardImageBase64 : this.iu.blankImage), width: 100, style: 'imageMargin' }, // No image uploaded? Show blank image
        'My name is: ' + this.s01.b1_q1.value,
        'My age is: ' + this.s01.b1_q2.value,
        'I live with: ' + this.s01.b1_q3.value,
        'My school / kindergarten / childcare details are: ' + this.s01.b1_q4.value,
        { text: this.s01.staticContent[0].body1.replace(this.regex, '\n'), style: 'body' },
        'I like (e.g.people, places, objects, activities): ' + this.s01.b1_q5.value,
        'I am good at (strengths): ' + this.s01.b1_q6.value,
        'I have trouble with (challenges): ' + this.s01.b1_q7.value,
        'I need (supports and strategies): ' + this.s01.b1_q8.value,
      ],
      styles: {
        title: {
          fontSize: 36,
          bold: true,
          margin: [0, 0, 0, 16]
        },
        heading: {
          fontSize: 24,
          bold: true,
          margin: [0, 0, 0, 16]
        },
        body: {
          margin: [0, 16, 0, 16],
          color: 'gray'
        },
        subheading: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 8]
        },
        imageMargin: {
          margin: [0, 24, 0, 24]
        }
      },
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  constructor() {
    /*
    * Static content (intro paragraphs, body text, footer text, etc)
    */

    // TODO: Refactor this

    this.blockHeading = [
      `My social communication and social interaction: Strategies`,
      `My social communication and social interaction: Supports`,
      `My social communication and social interaction: Characteristics`,
      // Section 03
      `My restricted and repetitive behaviors and sensory processing: Characteristics`,
      `My restricted and repetitive behaviors and sensory processing: Impact`,
      `My restricted and repetitive behaviors and sensory processing: Strategies`,
      `My restricted and repetitive behaviors and sensory processing: Supports`,
      // Section 04
      `My learning style: Characteristics`,
      `My learning style: Impact`,
      `My learning style: Strategies`,
      `My learning style: Supports`,
      // Section 05
      `My current supports and services`,
      `Supports and services I need`,
      `My family’s current supports and services`,
      `Supports and services my family need`,
      // Section 06
      `How to choose supports and services: Questions to ask yourself about therapies, services, and supports`,
      `Provider`,
      `Therapy / Service`,
      `Logistics`,
      `General`,
      // Section 07
      `Settings Goals`,
      `Reaching Goals`,
      // Section 08
      `To do list`,
      `Links to further information`,
      `Learn more about Autism`,
      // Section 09
      `User notes & Copyright`,
    ]
  }
}
