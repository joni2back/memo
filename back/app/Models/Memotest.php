<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Memotest extends Model
{
    protected $fillable = [
        'name',
    ];

    /**
     * @return HasMany
     */
    public function images(): HasMany
    {
        return $this->hasMany(MemotestImage::class);
    }
    /**
     * @return HasMany
     */
    public function gameSessions(): HasMany
    {
        return $this->hasMany(GameSession::class);
    }
}
