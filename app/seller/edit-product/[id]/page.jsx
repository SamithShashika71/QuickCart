'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '@/context/AppContext';
import toast from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const EditProductPage = () => {
  const { getToken } = useAppContext();
  const router = useRouter();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    offerPrice: '',
    category: 'Earphone',
    image: [],
  });

  const [previewImages, setPreviewImages] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/product/${id}`);
        if (data.success) {
          setFormData(data.product);
          const previews = Array(4).fill('');
          data.product.image.forEach((img, idx) => {
            if (idx < 4) previews[idx] = img;
          });
          setPreviewImages(previews);
          setLoading(false);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error('Failed to load product');
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newPreviews = [...previewImages];
    const newImages = [...formData.image];

    const previewURL = URL.createObjectURL(file);
    newPreviews[index] = previewURL;
    newImages[index] = previewURL;

    setPreviewImages(newPreviews);
    setFormData(prev => ({ ...prev, image: newImages }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();
      const { data } = await axios.put(`/api/product/edit/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        toast.success('Product updated successfully');
        router.push('/seller/product-list');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Error updating product');
    }
  };

  return (
    <div className="p-6 w-full max-w-5xl">
      <h2 className="text-xl font-bold mb-6">Edit Product</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-2">Product Image</label>
            <div className="grid grid-cols-4 gap-4">
              {previewImages.map((img, idx) => (
                <label
                  key={idx}
                  className="border border-dashed border-gray-400 p-3 flex justify-center items-center cursor-pointer min-h-[80px] rounded"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, idx)}
                  />
                  {img ? (
                    <Image src={img} alt="preview" width={60} height={60} className="rounded" />
                  ) : (
                    <div className="text-sm text-gray-500 text-center">Upload</div>
                  )}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Type here"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Product Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows="3"
              placeholder="Type here"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="Earphone">Earphone</option>
                <option value="Headphone">Headphone</option>
                <option value="Watch">Watch</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Laptop">Laptop</option>
                <option value="Camera">Camera</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Product Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Offer Price</label>
              <input
                type="number"
                name="offerPrice"
                value={formData.offerPrice}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 mt-4"
          >
            UPDATE
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProductPage;
