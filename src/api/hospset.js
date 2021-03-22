import request from '@/utils/request'

export default {
  //医院设置列表
  getHospSetList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  deleteHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  batchRemoveHospSet(idList){
    return request({
      url: `/admin/hosp/hospitalSet/batchRemoveHospSet`,
      method: 'delete',
      data:idList
    })
  },
  lockHospSet(id,status){
    return request({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put',
    })
  },
  saveHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/saveHospSet`,
      method: 'post',
      data: hospitalSet
    })
  },
  getHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get'
    })
  },
  updateHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/updateHospSet`,
      method: 'post',
      data:hospitalSet
    })
  },
}