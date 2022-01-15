import axios from 'axios'

axios.defaults.baseURL = process.env.FNET_ENV ? 'http://3.34.123.79' : // FIXME: Cannot get env on Apptore.
                        Platform.OS === 'ios' ? 'http://127.0.0.1:8000' : 'http://10.0.2.2:8000'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

export default {
  login (data) {
    return ajax('login/', 'post', {
      data
    })
  },
  logout () {
    return ajax('logout', 'get')
  },
  getUserInfo () {
    return ajax('userInfo', 'get')
  },
  getFG (id) {
    return ajax('fg', 'get', {
      params: {
        id
      }
    })
  },
  getFGList (active) {
    return ajax('fg', 'get', {
      params: {
        active: active
      }
    })
  },
  uploadFGList (data) {
    return ajax('admin/fg', 'post', {
      data
    })
  },
  getNotice (id) {
    return ajax('notice/', 'get', {
      params: {
        id
      }
    })
  },
  getNoticeList () {
    return ajax('notice/', 'get')
  },
  createNotice (data) {
    return ajax('admin/notice/', 'post', {
      data
    })
  },
  editNotice (data) {
    return ajax('admin/notice/', 'put', {
      data
    })
  },
  deleteNotice (id) {
    return ajax('admin/notice/', 'delete', {
      params: {
        id
      }
    })
  },
  getCommentList (noticeId) {
    return ajax('notice/comment/', 'get', {
      params: {
        notice_id: noticeId
      }
    })
  },
  createComment (data) {
    return ajax('notice/comment/', 'post', {
      data
    })
  },
  editComment (data) {
    return ajax('notice/comment/', 'put', {
      data
    })
  },
  deleteComment (id) {
    return ajax('notice/comment/', 'delete', {
      params: {
        id
      }
    })
  },
  checkComment (data) {
    return ajax('admin/notice/comment', 'put', {
      data
    })
  },
  getLC (id) {
    return ajax('lc', 'get', {
      params: {
        id
      }
    })
  },
  getLCList () {
    return ajax('lc', 'get')
  },
  createLC (data) {
    return ajax('lc', 'post', {
      data
    })
  },
  editLC (data) {
    return ajax('lc', 'put', {
      data
    })
  },
  deleteLC (id) {
    return ajax('lc', 'delete', {
      params: {
        id
      }
    })
  },
  getLCMemberList (name, register) {
    return ajax('freshman/lc', 'get', {
      params: {
        name: name,
        register: register // null, undefined인 경우 제거됨. https://github.com/axios/axios/issues/1139
      }
    })
  },
  getFreshman (id) {
    return ajax('admin/freshman', 'get', {
      params: {
        id
      }
    })
  },
  getFreshmanList () {
    return ajax('admin/freshman', 'get')
  },
  uploadFreshman (data) {
    return ajax('admin/freshman/file', 'post', {
      data
    })
  },
  registerFreshman (data) {
    return ajax('admin/freshman/register', 'put', {
      data
    })
  },
  searchFreshman (query) {
    return ajax('admin/freshman/search', 'get', {
      params: {
        query
      }
    })
  }
}

async function ajax (url, method, options) {
  if (options !== undefined) {
    var { params = {}, data = {} } = options
  } else {
    params = data = {}
  }
  try {
    const res = await axios({ url, method, params, data })
    if (res.data.error === true) {
      throw res
    } else {
      return res
    }
  } catch (err) {
    throw err
  }
}