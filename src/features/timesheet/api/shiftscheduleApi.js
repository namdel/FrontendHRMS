import axiosClient from '../../../api/api'; // Đường dẫn quay ra 3 cấp để về src/api/api.js

export const shiftscheduleApi = {
  // 1. Lấy danh sách ca làm việc
  getAll: (params) => {
    // params có thể là { search: '...', page: 1 }
    return axiosClient.get('/shifts', { params }); 
  },

  // 2. Lấy chi tiết 1 ca (để sửa)
  getById: (id) => {
    return axiosClient.get(`/shifts/${id}`);
  },

  // 3. Thêm mới
  create: (data) => {
    return axiosClient.post('/shifts', data);
  },

  // 4. Cập nhật
  update: (id, data) => {
    return axiosClient.put(`/shifts/${id}`, data);
  },

  // 5. Xóa
  delete: (id) => {
    return axiosClient.delete(`/shifts/${id}`);
  },

  // 6. Nhập khẩu Excel (Upload file)
  importExcel: (file) => {
    const formData = new FormData();
    formData.append('file', file); // 'file' là tên tham số backend yêu cầu
    return axiosClient.post('/shifts/import', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Bắt buộc khi upload file
      },
    });
  }
};