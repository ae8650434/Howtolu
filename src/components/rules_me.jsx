import React, { Component } from 'react';
import styles from '../css/rules_me.module.css'

class Rules extends Component {
    state = {}
    render() {
        return (

            <div className={styles.all}>
                <br /><br /><br />
                <p className={styles.title}>租借規範</p><br />
                <hr style={{border: '2px solid black'}}/>
                <br /><br /><br />
                <div className={styles.second_all}>
                    <div className={styles.inside_title}>一、租金及費用計算</div>
                    <div className={styles.inside_word}>
                        租金條款:承租人租用How To
                        露裝備時,租借天數與租金價格參照租借裝備頁各裝備價格。 賠償金額:How To
                        露有權追索相關賠償因租賃關係所生之一切債權、損害賠償及逾期產生之費用。
                        (詳細賠償規則參照第六點規範)
                    </div>
                    <br />
                </div>
                <br /><br /><br />
                <div className={styles.second_all}>
                    <div className={styles.inside_title}>​二、取貨與歸還</div>
                    <div className={styles.inside_word}>
                        租賃方式為店面取件,請事先跟How To 露預約
                        取件者,請當場檢查裝備情況,經確認無誤後,始得領取裝備。經取件者確認並領取後,由於租品損壞無法逕行判定是否人為因素等,故無法認列本公司租品損壞之責為How
                        To露,因此歸還物品如有損壞將請客戶逕行賠償,部分裝備如帳篷、天幕等請承租人於取件當日自行檢查確認,若有損壞請拍照留存,並於當日通知How
                        To 露。
                        *延遲歸還:延遲歸還者,視實際歸還日期,以「逾期價格」乘上逾期天數計算延遲費用
                        (逾期價格=兩倍租金)。
                    </div>
                    <br />
                </div>
                <br /><br /><br />
                <div className={styles.second_all}>
                    <div className={styles.inside_title}>​三、領取裝備的注意事項</div>
                    <div className={styles.inside_word}>
                        How To 露每次出租裝備前,均經過專人清潔、維護及保養,出租裝備非全新品,凡有正常磨損、汙漬,不影響使用功能及安全者,不得視為瑕疵。
                        承租人一經取貨離場,如未使用該物品,不得要求退貨及退款。
                        因取貨過程皆有點檢,歸還過程不得以商品有瑕疵為由而不賠償損害之責。
                        承租裝備歸還時有毀損、遺失、非一般正常使用所產生的髒汙、損壞等情形,承租人應照價維修或賠償。
                        租賃品點檢標準:歸還租賃品需無汙 (不得無法或難以清理等狀態)、無損、數量無誤等。
                        帳布(含客廳帳及天幕)、帳內地墊、寢具…等租賃裝備如有”非正常使用”髒汙,需酌收清潔費500元。(包含樹液造成帳布染色、內帳腳印、床墊浸水……等因素)
                    </div>
                    <br />
                </div>
                <br /><br /><br />
                
                <div className={styles.second_all}>
                    <div className={styles.inside_title}>四、退款說明</div>
                    <div className={styles.inside_word}>
                        特殊情況全額退款:不可抗之天然因素,如颱風、地震等並且由政府公告停班停課 (不含大雨或營主退訂營位等因素),請於政府公告後3天內,自行至How To 露官方Line主動取消訂單,並提供退款銀行資訊
                        (非中華郵政扣15元手續費),如無自行取消訂單,視同放棄退款權利。
                        承租人取消訂單:承租人欲取消訂單,需於官方Line提出,取貨日7天前取消可全額退款,7天內取消將酌收30%租金。若於「取件日」當日取消訂單,則需收取全額租金不得退款。
                    </div>
                    <br />
                </div>
                <br /><br /><br />
                <div className={styles.second_all}>
                    <div className={styles.inside_title}>五、租賃品點檢說明</div>
                    <div className={styles.inside_word}>
                        取貨點檢 : 取貨時將會由How To 露與承租人點檢裝備並說明使用事宜,部份配件請客戶當場自行點檢以保障承租人權益,承租人如點檢過程沒有注意而導致後續有損耗問題,將列入賠償費用。
                        還貨點檢:歸還租賃品需無汙 (不得無法或難以清理等狀態)、無損、數量無誤等。租賃品如有未達租賃品點檢標準,將會收取相關賠償或清潔費用。承租人應依一般物品之通常使用方式操作出租裝備,非依常規使用裝備所產生之危險及損害本公司不負賠償責任。
                    </div>
                    <br />
                </div>
                <br /><br /><br />
                <div className={styles.second_all}>
                    <div className={styles.inside_title}>六、賠償說明</div>
                    <div className={styles.inside_word}>
                        因租賃關係所生之一切債權、損害賠償及逾期產生之費用,承租人應負償還之責且不得有議。
                        歸還租賃品五天內發現有損壞,How To 露有權逕向承租人求償應盡的損害費用。
                        裝備維修賠償:如商品損壞程度為可以立即維修之範圍 (如帳篷補丁、睡墊補丁等),承租人僅需賠償維修費用,由How To 露逕行報價 ; 然若商品損壞程度須由廠商多日維修,承租人須賠償維修費用以及維修期間How To 露之租借損失
                        (以維修天數計價,最多收取五天租金)。
                        裝備整組賠償:如商品損壞程度為無法使之繼續營運承租者,則需要整組商品賠償,由How To 露逕行報價,不得以等值商品或商品進行賠償,更不得以預估殘值進行償還或規避償還責任,若該商品因缺貨無法立即購入者,承租人須賠償How To 露之租借損失
                        (以維修天數計價,最多收取五天租金)。
                        如租用裝備使用過程中,產生意外事故,致使受傷、死亡等,一概與How To 露無關,不得要求任何賠償。
                    </div>
                    <br />
                </div>
                <br /><br /><br />
                <div className={styles.second_all}>
                    <div className={styles.inside_title}>七、其他</div>
                    <div className={styles.inside_word}>
                        本契約書條款若有未盡事宜,依有關法令、習慣及誠實原則公平解決之。
                        因本契約發生之爭議訴訟時,承租者同意依下列機關之途徑處理
                        (一)縣市消費爭議調解委員會調解;(二)台灣台中地方法院為第一審管轄法院。
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default Rules;