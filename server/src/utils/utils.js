
class Utils {
    static DateNow(){
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        return `${day}.${month} в ${hours}:${minutes}`;
    }

}

module.exports = Utils;