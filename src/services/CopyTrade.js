import request from '@/services/Api'
import adminRequest from '@/services/ApiAdmin'

export default {
    saveConfig: (data) => {
        return request().post('api/copytrade/reg-experts', data)
    },
    saveAiConfig: (data) => {
        return request().post('api/copytrade/reg-ai', data)
    },

    getConfig: () => {
        return request().get('api/copytrade/get-config')
    },

    getExpertsList: () => {
        return request().get('api/copytrade/experts')
    },
    getFollowersList: () => {
        return request().get('api/copytrade/get-follow')
    },

    getTopExpertsList: () => {
        return request().get('api/copytrade/top-experts')
    },

    getProfitList: () => {
        return request().get('api/copytrade/get-profit-history')
    },

    getAiProfitList: () => {
        return request().get('api/copytrade/ai-profit-history')
    },
    
    getExpertsInfoList: () => {
        return adminRequest().get('api/copytrade/experts-info')
    },

    removeExpert: (id) => {
        return adminRequest().delete('api/copytrade/experts/' + id)
    },

    addExpert: (data) => {
        return adminRequest().put('api/copytrade/experts', data)
    },

    getRevenue: (params) => {
        return request().get('api/copytrade/get-revenue', { params })
    },

    logout: () => {
        return request().post('api/copytrade/logout-cpt')
    },
    removeFollow: (data) => {
        return request().post('api/copytrade/remove-follow-cpt',data)
    },
    resetMoneyPerDay: () => {
        return request().post('api/copytrade/reset-money')
    },
}
