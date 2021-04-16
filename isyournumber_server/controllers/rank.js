const { Rank } = require('../models')

module.exports = {
    // rank router의 post signal를 처리하는 함수
    post: (req, res) => {
        let score = req.body.score

        Rank.create({
            score: score,
        })
        .then((data) => {
            res.status(201).json({ message: 'Save Success'}).end()
        })
        .catch((error) => {
            console.log(error)
            res.status(502).send(error)
        })
    },

    get: (req, res) => {
        Rank.findAll({
            // 최대 5개까지만 불러오기 위한 코드
            limit: 5,
            // ranks를 내림차순으로 정렬하기 위한 코드
            order: [[ 'score', 'DESC']],
        })
        .then((data) => {
            res.status(200).json(data).end()
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
    }
}