// ===== ตั้งค่าเกมครูออม ม.1 =====
window.GAME_CONFIG = {
  SAVE_URL: "",          // URL ของ Apps Script Web App (เว้นว่าง = ไม่ส่งข้อมูลออก เก็บในเครื่องเท่านั้น)
  HEARTS: 3,             // หัวใจต่อด่าน
  BOSS_DAMAGE: 25,       // ตอบถูก 1 ข้อ ลด HP บอส (เต็ม 100) → ถูก 4 ใน 5 ข้อชนะบอส
  REWARD_THRESHOLD: 80,  // คะแนนรวม /100 ตั้งแต่ค่านี้ได้ "รางวัลพิเศษ" (ตั้งให้ตรงกับ Code.gs)
  SEND_EACH_STAGE: true  // true = ส่งผลทุกด่านไปแท็บ StageLog ด้วย (เมื่อตั้ง SAVE_URL)
};
